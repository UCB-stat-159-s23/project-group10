.ONESHELL:
SHELL = /bin/bash

## create_environment : Create and configure environment
.PHONY : env
env: 
	source /srv/conda/etc/profile.d/conda.sh
	conda env create -f environment.yml 
	conda activate final_proj
	conda install ipykernel
	python -m ipykernel install --user --name make-env --display-name "IPython - Make"
      

## html : Build the Jupyterbook
.PHONY : html
html:
	jupyter-book build .
    
    
## all : Run all notebooks
.PHONY : all
all :
	jupyter execute main.ipynb
    # jupyter nbconvert --to notebook --execute main.ipynb -
    

.PHONY : clean
## clean: clean up the figures, audio and _build folders
clean: 
	rm -rf figures/*
	rm -rf _build/*
    

.PHONY : help
## help: prints documentation
help : Makefile
	@sed -n '/^##/p' $<