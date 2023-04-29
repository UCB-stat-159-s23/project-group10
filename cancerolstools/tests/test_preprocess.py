import numpy as np
import pandas as pd
import math
import pytest
from cancerolstools import preprocess as pp

def test_imports():
    assert pp.import_fips() is not None
    assert pp.import_cancer() is not None
    
def test_cancermods():
    df = pp.import_cancer()
    df_mod = pp.cancer_preprocess(df)
    assert df_mod is not None
    assert ('Dona Ana County' in list(df_mod['County']))
    assert ('Target_div_LogIncome' in df_mod.columns)
    
def test_merge():
    fips = pp.import_fips()
    cancer = pp.import_cancer()
    cancer = pp.cancer_preprocess(cancer)
    merged = pp.merge_data(cancer, fips)
    assert merged is not None
    
def test_graphdf():
    fips = pp.import_fips()
    cancer = pp.import_cancer()
    cancer = pp.cancer_preprocess(cancer)
    merged = pp.merge_data(cancer, fips)
    graphdf = pp.graph_dataframe(merged)
    assert ('values' not in graphdf.columns)
    assert (graphdf['anomalies'].max() < 20)