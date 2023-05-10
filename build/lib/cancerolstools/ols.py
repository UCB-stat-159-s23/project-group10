import pandas as pd
import math
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
#import geopandas as gdp
from cancerolstools import preprocess as pp

import statsmodels.api as sm
import statsmodels.formula.api as smf

fips = pp.import_fips()
cancer = pp.import_cancer()
cancer = pp.cancer_preprocess(cancer)
merged = pp.merge_data(cancer, fips)
plotdf = pp.graph_dataframe(merged)

def make_state_dict():
    """
    Returns dictionary mapping state names to numbers.
    
    inputs:
        None
    
    outputs:
        dictionary with state names and matching ints
    """
    state_dict = {"Alabama": 1,
    "Alaska": 2,
    "Arizona": 3,
    "Arkansas": 4,
    "California": 5,
    "Colorado": 6,
    "Connecticut": 7,
    "Delaware": 8,
    "Florida": 9,
    "Georgia": 10,
    "Hawaii": 11,
    "Idaho": 12,
    "Illinois": 13,
    "Indiana": 14,
    "Iowa": 15,
    "Kansas": 16,
    "Kentucky": 17,
    "Louisiana": 18,
    "Maine": 19,
    "Maryland": 20,
    "Massachusetts": 21,
    "Michigan": 22,
    "Minnesota": 23,
    "Mississippi": 24,
    "Missouri": 25,
    "Montana": 26,
    "Nebraska": 27,
    "Nevada": 28,
    "New Hampshire": 29,
    "New Jersey": 30,
    "New Mexico": 31,
    "New York": 32,
    "North Carolina": 33,
    "North Dakota": 34,
    "Ohio": 35,
    "Oklahoma": 36,
    "Oregon": 37,
    "Pennsylvania": 38,
    "Rhode Island": 39,
    "South Carolina": 40,
    "South Dakota": 41,
    "Tennessee": 42,
    "Texas": 43,
    "Utah": 44,
    "Vermont": 45,
    "Virginia": 46,
    "Washington": 47,
    "West Virginia": 48,
    "Wisconsin": 49,
    "Wyoming": 50,
    "District of Columbia": 51}
    return state_dict
    
def cancer_int(cancer):
    """
    Returns dataframe with state coded as a number.
    
    inputs:
        cancer: result of preprocessed cancer data
    
    outputs:
        cancer_int: cancer data with state as number
    """
    state_dict = make_state_dict()
    cancer_int_df = cancer.drop(columns=['binnedInc', 'Geography', 'County'])
    cancer_int_df = cancer_int_df.replace({"State": state_dict})
    return cancer_int_df

def bootstrap_model(data):
    """
    Generate bootstrapped parameters of OLS model.
    
    inputs:
        data: dataframe from which to sample
    
    outputs:
        array of parameter values
    """
    data_boot = data.sample(n=len(data), replace=True)
    model = smf.ols(formula="TARGET_deathRate ~ povertyPercent + PctHS18_24 + isSoutheast + PctPublicCoverage + PctPublicCoverageAlone + PctUnemployed16_Over", data=data_boot).fit()
    return model.params[1:]