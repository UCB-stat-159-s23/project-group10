import pandas as pd
import math
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
#import geopandas as gdp
from cancerolstools import preprocess as pp

import plotly.graph_objects as go

from urllib.request import urlopen
import json
with urlopen('https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json') as response:
    counties = json.load(response)

import plotly.express as px

fips = pp.import_fips()
cancer = pp.import_cancer()
cancer = pp.cancer_preprocess(cancer)
merged = pp.merge_data(cancer, fips)
plotdf = pp.graph_dataframe(merged)

def get_variable_group(variable):
    """
    Returns corresponding variable name given unclean input.
    
    inputs:
        variable: uncleaned string
        
    outputs:
        cleaned string for visualization
    """
    if variable == 'pctwhite':
        return 'White'
    elif variable == 'pctblack':
        return 'Black'
    elif variable == 'pctasian':
        return 'Asian'
    else:
        return 'Other'
    
def anomaly_map(plotdf):
    """
    Creates plotly express map of anomalies.
    
    inputs:
        plotdf: result of pp.graph_dataframe()
    
    outputs:
        fig object with plot
    """
    fig = px.choropleth_mapbox(plotdf, geojson=counties, locations='fips', color='anomalies',
                           color_continuous_scale="Hot_r",
                           range_color=(0, 4),
                           mapbox_style="carto-positron",
                           zoom=3, center = {"lat": 37.0902, "lon": -95.7129},
                           opacity=0.5,
                           labels={'unemp':'unemployment rate'}
                          )
    fig.update_layout(margin={"r":0,"t":0,"l":0,"b":0})
    return fig

def race_income_plot(df):
    """
    Creates faceted plot of race and income effect on cancer death rate.
    
    inputs:
        df: result of df_race()
    
    outputs:
        fig object with plot
    """
    colors = ['red', 'blue', 'green', 'purple']
    color_map = dict(zip(df['variable_group'].unique(), colors))
    
    fig, axes = plt.subplots(nrows=2, ncols=2, figsize=(12, 12))
    for ax, variable in zip(axes.flatten(), df['variable'].unique()):
        data = df[df['variable'] == variable]
        ax.scatter(data['value'], data['TARGET_deathRate'], c=data['variable_group'].apply(lambda x: color_map[x]), s=data['medIncome']/5000, alpha=0.7)
        ax.set_xlabel('Percentage of population by race')
        ax.set_ylabel('Target death rate')
        ax.set_title(variable)
        ax.set_ylim([100, 400])
    return fig

def df_race(cancer_df):
    """
    Returns plot-ready dataframe for racial differences in cancer death rates.
    
    inputs:
        df: merged cancer dataframe
    
    outputs:
        Pandas dataframe
    """
    df = cancer_df[['TARGET_deathRate', 'medIncome', 'PctWhite', 'PctBlack', 'PctAsian', 'PctOtherRace']]
    df = df.melt(id_vars=['TARGET_deathRate', 'medIncome'], var_name='variable')
    df['variable_group'] = df['variable'].apply(get_variable_group)
    return df