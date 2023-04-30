import pandas as pd
import math
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
#import geopandas as gdp
from cancerolstools import preprocess as pp

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
    if variable == 'pctwhite':
        return 'White'
    elif variable == 'pctblack':
        return 'Black'
    elif variable == 'pctasian':
        return 'Asian'
    else:
        return 'Other'
    
def anomaly_map():
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