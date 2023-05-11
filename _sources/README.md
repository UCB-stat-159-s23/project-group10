[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/LiaEl886)
# Cancer OLS Challenge Project 
### Group 10：Danielle Killeen, Didi Duan, Noah Tran, Brandon Rodriguez, Jiayi Qiu
***

This repository is a comprehensive collection of our team's work on exploring and analyzing the correlation between cancer-related death rates and socioeconomic indicators in the United States. Our main goal is to identify the most critical factors that contribute to cancer fatalities by using advanced statistical techniques and machine learning models. The datasets we use in this repository cited from the   public-access data website data.world: https://data.world/nrippner/ols-regression-challenge. 

__Binder Link__: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/UCB-stat-159-s23/project-group10.git/HEAD?labpath=Main.ipynb)

__GitHub Pages Link__: https://ucb-stat-159-s23.github.io/project-group10/Main.html

__Instructions for replication__:

*Install cancerolstools package*

The custom package `cancerolstools` can be installed using `pip install .`

You can run tests on the package using the command `pytest cancerolstools`.

*Makefile support*

TODO

__Project structure__:

The package `cancerolstools` contains 3 scripts. Each maps roughly to the functions required in each of the 3 following notebooks.

The notebook `Data-Preparation.ipynb` will provide the steps to preprocess and merge the data, including a preliminary step to mapping the anomalies in the visualization.

The notebook `Data-Visualization.ipynb` will provide 2 different visualizations intended to guide the analysis. 

The notebook `Regression-AnalysisV2.ipynb` is a Python adaptation of original code in R intended to run some linear regression techniques on the data. It will create a basic model, apply LASSO penalization, and also conduct the nonparametric bootstrap.