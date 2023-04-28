import numpy as np
import pandas as pd
import math

def import_fips():
    """
    
    """
    return pd.read_csv('data/fips2county.tsv', sep='\t', header='infer', dtype=str, encoding='latin-1')

def import_cancer():
    return pd.read_csv('data/cancer_reg.csv', encoding='latin-1')

def cancer_preprocess(df):
    df['Target_div_Income'] = df['TARGET_deathRate'] / df['medIncome']
    df[['County', 'State']] = df['Geography'].str.extract(r'(.+), (.+)')
    df['County'] = df['County'].str.replace(' County', '')
    df.loc[166, 'County'] = 'Dona Ana County'
    df.loc[820, 'County'] = 'La Salle Parish'
    df['Target_div_LogIncome'] = df['TARGET_deathRate'] / df['medIncome'].apply(lambda x: math.log(x))
    
def merge_data(cancer, fips):
    return pd.merge(cancer, df, left_on=['County'], right_on=['CountyName'], how='left')

def graph_dataframe(df):
    newbieLOG = pd.DataFrame({'fips': df['CountyFIPS'],
                          'values': df['Target_div_LogIncome'],
                          'CountyFIPS': df['CountyFIPS']})
    newbieLOG['anomalies'] = (newbieLOG['values'] - newbieLOG['values'].mean()) / newbieLOG['values'].std()
    newbieLOG['anomalies'] = np.where((newbieLOG['anomalies']) > 1, (newbieLOG['anomalies']), 0)
    newbieLOG = newbieLOG[['fips', 'anomalies']]
    return newbieLOG


    
