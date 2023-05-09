import pandas as pd
import math
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
#import geopandas as gdp
from cancerolstools import preprocess as pp
from cancerolstools import ols as ls

import statsmodels.api as sm
import statsmodels.formula.api as smf

fips = pp.import_fips()
cancer = pp.import_cancer()
cancer = pp.cancer_preprocess(cancer)
merged = pp.merge_data(cancer, fips)
plotdf = pp.graph_dataframe(merged)

def test_statedict():
    mydict = ls.make_state_dict()
    assert mydict['Alabama'] == 1
    assert mydict['Nevada'] == 28

def test_cancint():
    df = ls.cancer_int(cancer)
    assert type(df['State'][0]) == np.int64