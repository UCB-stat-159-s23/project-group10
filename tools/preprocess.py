import numpy as np
import pandas as pd
import math

def import_fips():
    """
    Imports data corresponding to the FIPS code for each county.
    
    inputs: 
        None
    
    outputs: 
        pandas DataFrame of FIPS data
    """
    return pd.read_csv('data/fips2county.tsv', sep='\t', header='infer', dtype=str, encoding='latin-1')

def import_cancer():
    """
    Imports data corresponding to cancer rates and socioeconomic factors for each county in the United States.
    
    inputs: 
        None
    
    outputs: 
        pandas DataFrame of cancer data
    """
    return pd.read_csv('data/cancer_reg.csv', encoding='latin-1')

def cancer_preprocess(df):
    """
    Modifies data inplace for the cancer dataframe by adding new columns, cleaning up data for county identification
    
    inputs:
        df: result of call to import_cancer()
    
    outputs:
        df: modified and cleaned pandas dataframe 
    """
    df['Target_div_Income'] = df['TARGET_deathRate'] / df['medIncome']
    df[['County', 'State']] = df['Geography'].str.extract(r'(.+), (.+)')
    df['County'] = df['County'].str.replace(' County', '')
    df.loc[166, 'County'] = 'Dona Ana County'
    df.loc[820, 'County'] = 'La Salle Parish'
    df['Target_div_LogIncome'] = df['TARGET_deathRate'] / df['medIncome'].apply(lambda x: math.log(x))
    return df
    
def merge_data(cancer, fips):
    """
    Merges cancer and FIPS data based on FIPS code
    
    inputs: 
        cancer: result of call to import_cancer()
        fips: result of call to import_fips()
    
    outputs: 
        pandas DataFrame of FIPS data
    """
    return pd.merge(cancer, fips, left_on=['County'], right_on=['CountyName'], how='left')

def graph_dataframe(df):
    """
    Creates new dataframe based on merged data for geospatial plotting of anomalies
    
    inputs: 
        df: result of call to merge_data(cancer, fips)
    
    outputs:
        newbieLOG: pandas dataframe containing only fips code and anomalies
    """
    newbieLOG = pd.DataFrame({'fips': df['CountyFIPS'],
                          'values': df['Target_div_LogIncome'],
                          'CountyFIPS': df['CountyFIPS']})
    newbieLOG['anomalies'] = (newbieLOG['values'] - newbieLOG['values'].mean()) / newbieLOG['values'].std()
    newbieLOG['anomalies'] = np.where((newbieLOG['anomalies']) > 1, (newbieLOG['anomalies']), 0)
    newbieLOG = newbieLOG[['fips', 'anomalies']]
    return newbieLOG


    
