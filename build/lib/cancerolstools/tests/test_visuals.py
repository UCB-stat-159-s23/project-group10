import pandas as pd
import math
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
#import geopandas as gdp
from cancerolstools import preprocess as pp
from cancerolstools import visuals as vi

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

def test_vargroup():
    assert vi.get_variable_group('pctblack') == 'Black'
    assert vi.get_variable_group('kajhsdjdh') == 'Other'

def test_anomap():
    fig = vi.anomaly_map(plotdf)
    assert fig is not None
    
def test_dfrace():
    df = vi.df_race(cancer)
    assert df is not None
    
def test_multiplot():
    fig = vi.race_income_plot(vi.df_race(cancer))
    assert fig is not None