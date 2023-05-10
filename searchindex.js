Search.setIndex({"docnames": ["Data-Preparation", "Data-Visualization", "Main", "README", "Regression-AnalysisV2", "contribution_statement", "project-description"], "filenames": ["Data-Preparation.ipynb", "Data-Visualization.ipynb", "Main.ipynb", "README.md", "Regression-AnalysisV2.ipynb", "contribution_statement.md", "project-description.md"], "titles": ["Data Preparation", "Data Visualization", "INTRODUCTION", "Cancer OLS Challenge Project", "Regression in Python", "&lt;no title&gt;", "Final Project: original data analysis"], "terms": {"In": [0, 2, 4], "thi": [0, 1, 2, 3, 4, 6], "part": [0, 6], "we": [0, 1, 2, 3, 4, 6], "outlin": 0, "process": [0, 1, 2, 4], "follow": [0, 4], "our": [0, 1, 2, 3, 4, 6], "project": [0, 2, 4], "To": [0, 1, 2, 4], "begin": [0, 1, 4], "team": [0, 2, 3, 6], "undertook": 0, "an": [0, 1, 2, 4, 6], "extens": 0, "cancer": [0, 1, 2, 4], "relat": [0, 2, 3, 4], "dataset": [0, 1, 2, 3, 4, 6], "us": [0, 1, 2, 3, 5, 6], "counti": [0, 1, 2, 4], "involv": [0, 2, 4], "analyz": [0, 1, 2, 3, 5], "gain": [0, 2, 4], "better": [0, 1, 2, 4], "understand": [0, 2, 4], "its": [0, 1], "structur": 0, "format": 0, "content": 0, "wa": [0, 4, 6], "obtain": [0, 1, 4], "from": [0, 1, 2, 3, 4, 6], "world": [0, 3], "websit": [0, 3], "which": [0, 1, 2, 4, 5, 6], "aggreg": 0, "variou": [0, 2, 4], "sourc": [0, 6], "includ": [0, 1, 4, 6], "american": 0, "commun": [0, 2, 4], "survei": 0, "censu": 0, "gov": 0, "clinicaltri": 0, "carefulli": 0, "curat": 0, "ensur": [0, 2], "suitabl": [0, 4], "analysi": [0, 4, 5], "remov": [0, 4], "ani": [0, 1, 4, 6], "miss": [0, 1, 2, 4], "inconsist": 0, "point": [0, 1, 4, 6], "standard": [0, 1, 2, 4, 6], "address": [0, 2, 6], "potenti": [0, 2, 6], "qualiti": [0, 6], "issu": 0, "overal": [0, 2, 4], "critic": [0, 2, 3], "step": [0, 2, 6], "accuraci": 0, "valid": [0, 4], "By": [0, 1, 2, 6], "select": [0, 2], "were": [0, 1, 2, 4], "abl": 0, "gener": [0, 1, 4, 6], "meaning": 0, "insight": [0, 2, 4], "recommend": [0, 6], "import": [0, 1, 2, 4, 6], "panda": [0, 1, 4], "pd": [0, 1, 4], "math": [0, 1, 4], "numpi": [0, 1, 4, 6], "np": [0, 1, 4], "shapefil": [0, 1, 4], "shp": [0, 1, 4], "matplotlib": [0, 1, 4], "pyplot": [0, 1, 4], "plt": [0, 1, 4], "seaborn": [0, 1, 4], "sn": [0, 1, 4], "cancerolstool": [0, 1, 2, 4], "preprocess": [0, 1, 2, 5], "pp": [0, 1, 4], "ar": [0, 1, 2, 4, 6], "crucial": [0, 2], "firstli": [0, 1, 4], "try": [0, 6], "enhanc": 0, "geograph": [0, 1, 2], "inform": [0, 1, 2, 4, 5, 6], "avail": 0, "each": [0, 1, 2, 4, 5, 6], "unit": [0, 1, 2, 3, 4], "state": [0, 1, 2, 3, 4, 6], "requir": [0, 4, 6], "start": [0, 4, 6], "feder": [0, 1, 2, 4], "fip": [0, 1, 2], "accomplish": 0, "set": [0, 2, 6], "librari": [0, 2, 4, 6], "python": [0, 6], "read": [0, 6], "datafram": [0, 1, 2, 4, 6], "specifi": [0, 4], "file": [0, 6], "locat": [0, 2, 4], "tab": 0, "separ": [0, 6], "encod": 0, "also": [0, 1, 2, 4, 5, 6], "type": [0, 4, 6], "column": [0, 1, 2, 4], "string": 0, "consist": [0, 4], "fips_df": [0, 1, 4], "import_fip": [0, 1, 4], "statefip": 0, "countyfips_3": 0, "countynam": 0, "statenam": 0, "countyfip": 0, "stateabbr": 0, "state_counti": [0, 2], "0": [0, 1, 2, 4], "01": [0, 4], "001": [0, 4], "autauga": 0, "alabama": [0, 4], "01001": 0, "al": 0, "1": [0, 2], "003": [0, 4], "baldwin": 0, "01003": 0, "2": [0, 6], "005": 0, "barbour": 0, "01005": 0, "3": [0, 1], "007": 0, "bibb": 0, "01007": 0, "4": [0, 1], "009": 0, "blount": 0, "01009": 0, "3138": 0, "56": [0, 4], "037": 0, "sweetwat": 0, "wyom": 0, "56037": 0, "wy": 0, "3139": 0, "039": [0, 4], "teton": 0, "56039": 0, "3140": 0, "041": 0, "uinta": 0, "56041": 0, "3141": 0, "043": 0, "washaki": 0, "56043": 0, "3142": 0, "045": 0, "weston": 0, "56045": 0, "3143": 0, "row": [0, 1, 4], "7": [0, 4], "method": [0, 1, 2, 4], "examin": [0, 4], "distribut": [0, 1, 2, 4], "across": [0, 1, 2], "differ": [0, 1, 2, 4, 6], "identifi": [0, 1, 2, 3, 4, 6], "trend": [0, 1, 2], "pattern": [0, 2, 4], "visual": [0, 4, 5], "help": [0, 1, 2, 5, 6], "relationship": [0, 1, 2], "between": [0, 1, 2, 3, 4], "variabl": [0, 1, 2, 4, 6], "describ": [0, 6], "descript": [0, 6], "statist": [0, 2, 3, 6], "allow": [0, 2, 4], "quickli": 0, "get": [0, 6], "overview": 0, "number": 0, "observ": [0, 4], "mean": [0, 1, 2, 4], "deviat": [0, 1, 2], "minimum": [0, 4], "maximum": [0, 6], "valu": [0, 1, 2, 4], "print": [0, 4], "count": [0, 2], "uniqu": 0, "51": [0, 4], "325": 0, "1878": 0, "top": [0, 1], "48": [0, 4], "washington": 0, "texa": 0, "tx": 0, "freq": 0, "254": 0, "49": [0, 4], "30": [0, 4], "next": 0, "total": [0, 6], "comprehens": [0, 2, 3], "countri": [0, 1, 2], "subset": 0, "where": 0, "greater": [0, 1], "than": [0, 1, 2, 4], "one": [0, 2, 6], "indic": [0, 1, 2, 3, 4, 6], "discrep": 0, "code": [0, 1, 2, 4, 5], "name": [0, 2, 4], "fips_counti": 0, "groupbi": 0, "size": [0, 1, 4, 6], "reset_index": 0, "67": 0, "alaska": 0, "02": 0, "arizona": 0, "04": [0, 4], "15": [0, 4], "arkansa": [0, 4], "05": [0, 4, 6], "75": [0, 4], "california": [0, 2], "06": 0, "58": [0, 4], "5": [0, 4], "colorado": 0, "08": 0, "64": 0, "6": [0, 4], "connecticut": 0, "09": 0, "8": [0, 4], "delawar": 0, "10": [0, 4, 6], "9": [0, 4], "florida": [0, 4], "12": [0, 4], "georgia": [0, 4], "13": [0, 4], "159": [0, 3, 6], "11": [0, 4], "hawaii": 0, "idaho": 0, "16": [0, 1, 4], "44": [0, 4], "illinoi": 0, "17": [0, 4], "102": [0, 4], "14": [0, 4], "indiana": 0, "18": [0, 4], "92": [0, 1, 4], "iowa": 0, "19": [0, 4], "99": [0, 4], "kansa": 0, "20": [0, 4], "105": 0, "kentucki": [0, 4], "21": [0, 4], "120": 0, "louisiana": [0, 4], "22": [0, 4], "main": [0, 2, 3, 5], "23": [0, 4], "maryland": 0, "24": [0, 2, 4], "massachusett": 0, "25": [0, 4], "michigan": 0, "26": [0, 4], "83": 0, "minnesota": 0, "27": 0, "87": [0, 4], "mississippi": [0, 4], "28": 0, "82": 0, "missouri": 0, "29": [0, 4], "115": 0, "montana": 0, "nebraska": 0, "31": 0, "93": 0, "nevada": 0, "32": [0, 4], "new": [0, 1, 2, 4, 6], "hampshir": 0, "33": [0, 4], "jersei": 0, "34": 0, "mexico": 0, "35": [0, 4], "york": 0, "36": [0, 4], "62": [0, 4], "north": [0, 4], "carolina": [0, 4], "37": 0, "100": [0, 2, 4, 6], "dakota": 0, "38": 0, "53": 0, "ohio": 0, "39": [0, 4], "88": 0, "oklahoma": 0, "40": [0, 4], "77": 0, "oregon": 0, "41": [0, 4], "pennsylvania": 0, "42": [0, 4], "rhode": 0, "island": 0, "south": [0, 1, 2, 4], "45": [0, 4], "46": [0, 4], "66": [0, 4], "tennesse": [0, 4], "47": [0, 4], "95": [0, 4], "43": [0, 4], "utah": 0, "vermont": 0, "50": [0, 1, 4], "virginia": [0, 4], "133": [0, 4], "west": [0, 4], "54": [0, 4], "55": [0, 4], "wisconsin": 0, "72": 0, "moreov": 0, "can": [0, 2, 4, 6], "tool": 0, "filter": [0, 2], "base": [0, 2, 4], "specif": [0, 1, 2, 4], "area": [0, 1, 2, 4], "interest": [0, 1, 2, 4, 6], "For": [0, 1, 2, 4], "exampl": [0, 6], "condit": [0, 6], "ca": 0, "alameda": [0, 2], "view": [0, 2], "result": [0, 1, 2, 4, 6], "below": [0, 4], "see": [0, 4, 6], "ha": [0, 2, 4, 6], "06001": 0, "alameda_info": 0, "187": 0, "secondli": 0, "regress": [0, 3, 5], "predict": [0, 2, 4], "death": [0, 1, 2, 3, 4], "rate": [0, 1, 2, 3, 4], "demograph": [0, 1, 2], "health": [0, 2, 4], "factor": [0, 1, 2, 3, 4], "conduct": [0, 2, 4, 6], "further": [0, 1, 2, 4], "cancer_df": [0, 1, 4], "import_canc": [0, 1, 4], "avganncount": [0, 4], "avgdeathsperyear": [0, 4], "target_deathr": [0, 2, 4], "incidencer": [0, 4], "medincom": [0, 4], "popest2015": [0, 4], "povertyperc": [0, 2, 4], "studypercap": [0, 4], "binnedinc": [0, 2], "medianag": [0, 4], "pctprivatecoveragealon": [0, 4], "pctempprivcoverag": [0, 4], "pctpubliccoverag": [0, 4], "pctpubliccoveragealon": [0, 4], "pctwhite": [0, 4], "pctblack": [0, 2, 4], "pctasian": [0, 4], "pctotherrac": [0, 4], "pctmarriedhousehold": [0, 4], "birthrat": [0, 4], "1397": [0, 4], "000000": [0, 1, 4], "469": [0, 4], "164": [0, 4], "489": [0, 4], "800000": [0, 4], "61898": [0, 4], "260131": [0, 4], "499": [0, 4], "748204": [0, 4], "61494": 0, "125635": 0, "nan": 0, "81": [0, 4], "780529": [0, 4], "594728": [0, 4], "821857": [0, 4], "843479": [0, 4], "52": [0, 4], "856076": [0, 4], "118831": [0, 4], "173": [0, 4], "70": [0, 4], "161": [0, 4], "411": [0, 4], "600000": [0, 4], "48127": [0, 4], "43269": [0, 4], "111234": [0, 4], "48021": 0, "51046": 0, "89": [0, 4], "228509": [0, 4], "969102": [0, 4], "246233": [0, 4], "741352": [0, 4], "372500": [0, 4], "333096": [0, 4], "174": [0, 4], "349": [0, 4], "700000": [0, 4], "49348": [0, 4], "21026": [0, 4], "560164": [0, 4], "90": [0, 4], "922190": [0, 4], "739673": [0, 4], "465898": [0, 4], "747358": [0, 4], "444868": [0, 4], "729488": [0, 4], "427": [0, 4], "202": [0, 4], "194": [0, 4], "430": [0, 4], "400000": [0, 4], "44243": [0, 4], "75882": [0, 4], "342": [0, 4], "637253": [0, 4], "42724": 0, "45201": 0, "91": [0, 4], "744686": [0, 4], "782626": [0, 4], "161359": [0, 4], "362643": [0, 4], "021514": [0, 4], "603841": [0, 4], "57": [0, 4], "144": [0, 4], "350": [0, 4], "100000": [0, 4], "49955": [0, 4], "10321": [0, 4], "94": [0, 4], "104024": [0, 4], "270192": [0, 4], "665830": [0, 4], "492135": [0, 4], "027460": [0, 4], "796657": [0, 4], "3042": [0, 4], "1962": [0, 4], "667684": [0, 4], "149": [0, 4], "453": [0, 4], "549422": [0, 4], "46961": [0, 4], "6343": [0, 4], "280811": [0, 4], "837754": [0, 4], "327613": [0, 4], "700468": [0, 4], "063830": [0, 4], "773512": [0, 4], "3043": [0, 4], "150": [0, 4], "48609": [0, 4], "37118": [0, 4], "377": [0, 4], "175494": [0, 4], "706245": [0, 4], "326771": [0, 4], "044920": [0, 4], "130288": [0, 4], "007937": [0, 4], "186470": [0, 4], "3044": [0, 4], "153": [0, 4], "51144": [0, 4], "34536": [0, 4], "1968": [0, 4], "959926": [0, 4], "54545": 0, "961629": [0, 4], "313188": [0, 4], "316472": [0, 4], "680705": [0, 4], "153949": [0, 4], "809192": [0, 4], "3045": [0, 4], "175": [0, 4], "50745": [0, 4], "25609": [0, 4], "905681": [0, 4], "176562": [0, 4], "244632": [0, 4], "131790": [0, 4], "484232": [0, 4], "582938": [0, 4], "3046": [0, 4], "213": [0, 4], "41193": [0, 4], "37030": [0, 4], "40362": 0, "60": [0, 4], "098132": [0, 4], "590100": [0, 4], "177753": [0, 4], "356457": [0, 4], "040242": [0, 4], "981723": [0, 4], "3047": [0, 4], "featur": [0, 1, 2], "606": 0, "338544": 0, "185": 0, "965868": 0, "178": 0, "664063": 0, "448": 0, "268586": 0, "std": [0, 4], "1416": 0, "356223": 0, "504": 0, "134286": 0, "751511": 0, "560733": 0, "min": 0, "59": 0, "201": 0, "300000": 0, "76": 0, "200000": 0, "420": 0, "171": 0, "61": 0, "518": [0, 4], "195": 0, "480": [0, 4], "850000": 0, "max": 0, "38150": 0, "14010": 0, "362": 0, "1206": 0, "900000": 0, "047000e": 0, "03": 0, "47063": 0, "281917": 0, "026374e": 0, "878175": 0, "155": 0, "399415": 0, "272333": 0, "12040": 0, "090836": 0, "290592e": 0, "409087": 0, "529": 0, "628366": 0, "304480": 0, "22640": 0, "270000e": 0, "38882": 0, "500000": 0, "168400e": 0, "150000": 0, "45207": 0, "664300e": 0, "52492": 0, "867100e": 0, "650776": 0, "017029e": 0, "07": 0, "9762": 0, "308998": 0, "624": 0, "medianagemal": [0, 4], "2438": 0, "570725": 0, "453774": 0, "196324": 0, "226017": 0, "083006": 0, "447687": 0, "350000": 0, "78": 0, "252642": 0, "240072": 0, "645286": 0, "107978": 0, "841741": 0, "113041": 0, "380025": 0, "534538": 0, "199155": 0, "296180": 0, "620675": 0, "059774": 0, "247576": 0, "550000": 0, "451693": 0, "509732": 0, "65": 0, "85": 0, "947799": 0, "253965": 0, "983523": 0, "243872": 0, "640306": 0, "610276": 0, "517710": 0, "572814": 0, "985816": 0, "992490": 0, "254199": 0, "295172": 0, "763063": 0, "521419": 0, "549812": 0, "826185": 0, "669941": 0, "381478": 0, "221037": 0, "177960": 0, "395132": 0, "493677": 0, "619425": 0, "930251": 0, "075397": 0, "326165": 0, "x": [0, 4], "two": [0, 2, 4, 6], "scatter": 0, "plot": [0, 1, 2, 4], "show": [0, 1, 4], "incid": [0, 2, 4], "target": [0, 1, 2, 6], "well": [0, 1, 2, 4, 6], "median": [0, 1, 2], "incom": [0, 1, 2, 4], "The": [0, 1, 2, 3, 4, 6], "first": [0, 1], "suggest": [0, 1, 2, 4, 6], "posit": [0, 1, 2], "correl": [0, 2, 3], "higher": [0, 1, 4], "tend": [0, 4], "associ": [0, 2], "second": [0, 4], "clear": [0, 4], "appear": [0, 1, 4], "more": [0, 2, 4, 6], "close": [0, 4], "fig": [0, 1, 4], "ax": [0, 4], "subplot": [0, 4], "figsiz": [0, 4], "vs": [0, 1], "set_xlabel": 0, "set_ylabel": 0, "set_titl": 0, "savefig": [0, 1, 4], "figur": [0, 1, 2, 4, 5, 6], "incidence_r": 0, "png": [0, 1, 4], "640x480": [0, 4], "later": [0, 1, 4], "model": [0, 1, 2, 3, 5, 6], "wrote": [0, 2, 5], "seri": 0, "transform": [0, 1, 2, 4], "primari": [0, 2], "ad": [0, 6], "divid": [0, 4], "extract": [0, 2, 4], "geographi": 0, "creat": [0, 1, 2, 4, 5, 6], "manual": 0, "chang": [0, 1, 4], "odd": 0, "charact": 0, "merg": 0, "add": [0, 4, 6], "log": [0, 1, 2, 4], "preserv": 0, "onli": [0, 1, 4], "conveni": [0, 4, 6], "all": [0, 1, 2, 4, 5, 6], "implement": [0, 1, 4], "within": [0, 4], "modul": [0, 2, 4], "packag": [0, 1, 4], "particular": 0, "cancer_preprocess": [0, 1, 4], "perform": [0, 2], "modif": 0, "list": [0, 6], "abov": [0, 1, 4], "while": [0, 1, 4, 6], "merge_data": [0, 1], "modifi": 0, "unmodifi": 0, "detail": [0, 4, 6], "repositori": [0, 3], "graphdata": [0, 1], "graph_datafram": [0, 1], "addition": [0, 1, 2, 4], "anoth": 0, "data_with_anomali": 0, "aid": [0, 4], "spread": 0, "symmetr": [0, 1], "thu": [0, 1, 4], "ratio": [0, 1, 2], "appli": [0, 1, 2, 4, 6], "calcul": [0, 1, 2], "Then": [0, 1], "anomali": [0, 2], "unusu": [0, 1], "high": [0, 1, 2, 4, 6], "small": [0, 1], "call": [0, 1, 2], "repres": [0, 1, 2, 4], "awai": [0, 1, 4], "final": [0, 1, 4], "focu": [0, 1, 4, 6], "signific": [0, 1, 2, 4, 6], "less": [0, 1, 2, 4], "complet": [0, 1, 6], "compil": [0, 1, 2], "document": [0, 1, 6], "pleas": [0, 1], "visit": [0, 1], "53035": [0, 1], "53037": [0, 1], "53039": [0, 1], "16061": [0, 1], "21135": [0, 1], "14223": [0, 1], "48159": [0, 1], "14224": [0, 1], "50011": [0, 1], "14225": [0, 1], "51067": [0, 1], "14226": [0, 1], "53021": [0, 1], "14227": [0, 1], "20061": [0, 1], "140201": [0, 1], "14228": [0, 1], "vi": 1, "problem": [1, 2, 6], "mai": [1, 4, 6], "larger": [1, 4], "region": [1, 2, 4], "wide": [1, 2], "explor": [1, 2, 3, 5, 6], "depend": [1, 6], "averag": [1, 2, 4], "per": [1, 2, 4, 6], "capita": [1, 2], "urllib": 1, "request": 1, "urlopen": 1, "json": 1, "http": [1, 3], "raw": 1, "githubusercont": 1, "com": 1, "plotli": 1, "master": 1, "geojson": 1, "respons": 1, "load": 1, "express": 1, "px": 1, "anomaly_map": 1, "write_imag": 1, "want": [1, 6], "compar": [1, 2, 4, 6], "when": 1, "graph": [1, 2], "color": [1, 4], "grei": 1, "mention": 1, "previous": 1, "consid": [1, 2, 4, 6], "As": [1, 2, 4], "seen": 1, "nearli": 1, "east": [1, 2], "possibl": [1, 2, 4, 6], "impli": 1, "should": [1, 2, 4, 6], "dummi": [1, 2], "tell": 1, "whether": [1, 2, 4, 6], "significantli": [1, 4], "affect": [1, 4], "If": [1, 2, 6], "found": 1, "could": [1, 2], "justifi": [1, 2, 4, 6], "addit": [1, 2], "spend": [1, 2, 6], "certain": [1, 2, 4], "support": [1, 2, 4], "s": [1, 2, 3, 4, 6], "note": [1, 2, 4, 6], "aren": 1, "t": [1, 4, 6], "simpli": [1, 4], "think": [1, 6], "about": [1, 6], "geopolit": 1, "might": 1, "reflect": 1, "through": 1, "graph_object": 1, "go": 1, "race_plot_df": 1, "df_race": 1, "race_income_plot": 1, "suptitl": [1, 4], "impact": [1, 2], "race": [1, 2, 4], "fontsiz": 1, "tight_layout": 1, "subplots_adjust": [1, 4], "dpi": 1, "percentag": [1, 2, 4], "respect": [1, 2, 4], "facet": [1, 2], "annual": [1, 2], "With": 1, "dot": 1, "rang": [1, 2, 4, 6], "line": 1, "thei": [1, 6], "random": [1, 4, 6], "classifi": 1, "confound": 1, "among": [1, 2], "up": [1, 6], "vertic": 1, "lower": [1, 4, 6], "smaller": 1, "characterist": 1, "vari": [1, 2], "densiti": 1, "group": [1, 2, 4, 6], "face": 1, "multicollinear": [1, 2], "build": [1, 2, 5], "subpopul": [1, 2], "taken": 1, "account": [1, 2, 4], "construct": [1, 2, 4], "interpret": [1, 2], "complex": [1, 2], "non": [1, 2], "linear": [1, 2, 4], "have": [1, 2, 4, 6], "appropri": [1, 2, 4], "under": [1, 4, 6], "consider": 1, "notebook": [1, 2, 5], "plai": [2, 6], "role": [2, 6], "influenc": 2, "develop": [2, 6], "effect": [2, 4], "public": [2, 3], "strategi": 2, "reduc": [2, 4], "studi": [2, 4], "util": [2, 4, 5, 6], "contain": [2, 4, 6], "provid": [2, 4, 5, 6], "other": [2, 4, 6], "compris": 2, "abbrevi": 2, "instanc": [2, 4], "On": 2, "hand": 2, "case": [2, 4], "year": [2, 6], "popul": [2, 4], "estim": 2, "racial": [2, 4], "clean": [2, 4], "prepar": [2, 4, 5], "numer": 2, "kei": [2, 6], "label": [2, 6], "000": [2, 4], "risk": 2, "continu": [2, 5], "present": 2, "major": 2, "except": 2, "categor": [2, 4], "bracket": 2, "enabl": [2, 6], "accur": 2, "reliabl": [2, 6], "analys": [2, 6], "investig": [2, 4], "aim": 2, "uncov": 2, "driven": 2, "polici": 2, "make": [2, 4, 5, 6], "healthcar": [2, 4], "initi": [2, 4], "mitig": 2, "object": 2, "socioeconom": [2, 3, 4], "unveil": 2, "preval": 2, "fatal": [2, 3], "advanc": [2, 3], "techniqu": [2, 3, 4], "machin": [2, 3], "learn": [2, 3], "goal": [2, 3, 4, 6], "pinpoint": 2, "most": [2, 3, 4, 6], "substanti": 2, "mortal": [2, 4], "offer": [2, 6], "valuabl": 2, "princip": 2, "determin": [2, 4], "therebi": 2, "improv": 2, "being": [2, 6], "focus": 2, "reveal": 2, "concentr": 2, "propos": [2, 6], "assess": [2, 4], "prove": 2, "furthermor": 2, "would": [2, 4], "It": [2, 4, 6], "just": [2, 6], "alon": [2, 4], "displai": [2, 6], "level": [2, 4], "need": [2, 4, 6], "highlight": [2, 4], "subsequ": [2, 6], "run": [2, 6], "domain": [2, 4], "knowledg": [2, 4], "literatur": [2, 4], "review": 2, "fit": [2, 4], "ordinari": 2, "least": [2, 4, 6], "squar": [2, 4], "ol": [2, 4, 5], "convert": [2, 4, 5], "integ": [2, 4], "imput": [2, 4], "multipl": [2, 4], "chain": [2, 4, 6], "equat": [2, 4], "mice": [2, 4], "prior": [2, 4], "pctnohs18_24": [2, 4], "pcths18_24": [2, 4], "chosen": 2, "statsmodel": [2, 4], "low": 2, "r": [2, 4], "weak": [2, 4], "explanatori": 2, "power": 2, "issoutheast": [2, 4], "southeast": [2, 4], "defin": [2, 4], "bureau": [2, 4], "econom": [2, 4], "classif": 2, "anova": [2, 4], "test": [2, 4, 5], "refin": 2, "robust": 2, "brandon": [2, 5], "rodriguez": [2, 5], "written": [2, 5, 6], "materi": [2, 5, 6], "idea": [2, 5, 6], "ipynb": [2, 5, 6], "decid": [2, 5], "noah": [2, 5], "tran": [2, 5], "canceroltool": [2, 5], "function": [2, 4, 5], "suit": [2, 5], "py": [2, 5], "chose": [2, 5], "compat": [2, 5], "daniel": [2, 5], "killeen": [2, 5], "_toc": [2, 5], "yml": [2, 5, 6], "_config": [2, 5], "book": [2, 5], "integr": [2, 5], "jupyt": [2, 5, 6], "summar": [2, 5, 6], "analyi": [2, 5], "didi": [2, 5], "duan": [2, 5], "finish": [2, 5], "environemnt": [2, 5], "binder": [2, 3, 5], "link": [2, 3, 5], "readm": [2, 5, 6], "md": [2, 5, 6], "licens": [2, 5, 6], "repo": [2, 5], "jiayi": [2, 5], "qiu": [2, 5], "makefil": [2, 5, 6], "move": [2, 5], "text": [2, 5, 6], "sens": [2, 5], "collect": [3, 4], "work": [3, 6], "contribut": [3, 4, 6], "cite": 3, "access": [3, 6], "data": [3, 5], "nrippner": 3, "github": [3, 6], "page": 3, "ucb": 3, "stat": 3, "s23": 3, "io": 3, "group10": 3, "html": 3, "ls": 4, "along": 4, "some": [4, 6], "phase": 4, "state_dict": 4, "make_state_dict": 4, "cancer_int_df": 4, "cancer_int": 4, "discuss": [4, 6], "record": 4, "na": 4, "kind": 4, "order": 4, "heavili": 4, "diagnos": 4, "moddat": 4, "isna": 4, "medianagefemal": 4, "avghouseholds": 4, "percentmarri": 4, "pctsomecol18_24": 4, "74": 4, "991795": 4, "pctbachdeg18_24": 4, "pcths25_over": 4, "pctbachdeg25_ov": 4, "pctemployed16_ov": 4, "988513": 4, "pctunemployed16_ov": 4, "pctprivatecoverag": 4, "986872": 4, "target_div_incom": 4, "target_div_logincom": 4, "dtype": 4, "float64": 4, "sinc": 4, "inbetween": 4, "school": 4, "diploma": 4, "bachelor": 4, "exclud": 4, "resid": 4, "govern": 4, "coverag": 4, "seem": 4, "too": [4, 6], "ignor": [4, 6], "wish": 4, "statu": [4, 6], "let": 4, "do": [4, 6], "replac": 4, "veri": 4, "like": [4, 6], "substitut": 4, "oper": 4, "assumpt": [4, 6], "mar": 4, "due": [4, 6], "bia": 4, "refus": 4, "fail": 4, "systemat": 4, "wai": [4, 6], "longer": 4, "check": 4, "toward": 4, "end": [4, 6], "both": 4, "origin": 4, "similar": 4, "regardless": 4, "done": 4, "assum": 4, "drop": 4, "18th": 4, "trim": 4, "sklearn": 4, "experiment": 4, "enable_iterative_imput": 4, "iterativeimput": 4, "class": [4, 6], "max_it": 4, "random_st": 4, "imputed_data": 4, "imputed_df": 4, "poverti": 4, "educ": 4, "2017": 4, "paper": [4, 6], "ethnic": 4, "dispar": 4, "surviv": 4, "1950": 4, "2014": 4, "over": [4, 6], "six": 4, "decad": 4, "widen": 4, "inequ": 4, "author": [4, 6], "conclud": 4, "individu": 4, "had": 4, "black": 4, "2021": 4, "lead": 4, "degre": 4, "exclus": 4, "u": 4, "time": [4, 6], "frame": 4, "comfort": 4, "guid": 4, "own": 4, "given": 4, "southwest": 4, "theperc": 4, "ag": 4, "whose": 4, "highest": 4, "attain": 4, "sever": 4, "who": [4, 6], "achiev": 4, "opposit": 4, "necessarili": 4, "true": 4, "percent": 4, "populac": 4, "pctnohs18": 4, "futur": 4, "pctpublicecoveragealon": 4, "imputed_new": 4, "copi": 4, "hist": 4, "titl": [4, 6], "histogram": 4, "xlabel": 4, "ylabel": 4, "frequenc": 4, "poverty_percent_hist": 4, "linear_model": 4, "lm": 4, "linearregress": 4, "api": 4, "sm": 4, "formula": 4, "smf": 4, "summari": [4, 6], "dep": 4, "240": 4, "adj": 4, "239": 4, "f": [4, 6], "date": 4, "wed": 4, "2023": [4, 6], "prob": 4, "39e": 4, "179": 4, "likelihood": 4, "14031": 4, "No": 4, "aic": 4, "807e": 4, "df": 4, "residu": 4, "bic": 4, "810e": 4, "covari": 4, "nonrobust": 4, "coef": 4, "err": 4, "p": 4, "025": 4, "975": 4, "intercept": 4, "127": 4, "5873": 4, "110": 4, "481": 4, "123": 4, "451": 4, "131": 4, "724": 4, "6696": 4, "083": 4, "087": 4, "507": 4, "833": 4, "1364": 4, "035": 4, "869": 4, "067": 4, "206": 4, "1734": 4, "057": 4, "058": 4, "002": 4, "285": 4, "062": 4, "7090": 4, "049": 4, "613": 4, "805": 4, "omnibu": 4, "156": 4, "436": 4, "durbin": 4, "watson": 4, "569": 4, "jarqu": 4, "bera": 4, "jb": 4, "276": 4, "skew": 4, "170": 4, "02e": 4, "111": 4, "kurtosi": 4, "970": 4, "cond": 4, "217": 4, "error": 4, "matrix": 4, "correctli": 4, "rather": 4, "belong": 4, "discern": 4, "southeast_int": 4, "isin": 4, "astyp": 4, "int": 4, "002664": 4, "945742": 4, "003352": 4, "960676": 4, "003540": 4, "165968": 4, "004403": 4, "209943": 4, "002891": 4, "347040": 4, "003186": 4, "907129": 4, "003088": 4, "909013": 4, "003009": 4, "194274": 4, "003449": 4, "152005": 4, "005185": 4, "101593": 4, "model1": 4, "result1": 4, "267": 4, "266": 4, "221": 4, "65e": 4, "13976": 4, "796e": 4, "3041": 4, "800e": 4, "130": 4, "1146": 4, "086": 4, "374": 4, "126": 4, "024": 4, "134": 4, "205": 4, "4814": 4, "084": 4, "726": 4, "318": 4, "645": 4, "0416": 4, "080": 4, "280": 4, "117": 4, "034": 4, "1066": 4, "056": 4, "902": 4, "6219": 4, "776": 4, "526": 4, "717": 4, "9612": 4, "556": 4, "739": 4, "183": 4, "141": 4, "721": 4, "604": 4, "433": 4, "154": 4, "43e": 4, "822": 4, "219": 4, "devianc": 4, "lambda": 4, "cross": 4, "lassocv": 4, "y": 4, "modelcvalpha": 4, "alpha": 4, "none": 4, "cv": 4, "getattr": 4, "alpha_": 4, "1036378151764025": 4, "newmodel": 4, "coef_": 4, "coeffici": 4, "med_penalti": 4, "coefs2": 4, "medium": 4, "penalti": 4, "big_penalti": 4, "1288": 4, "coefs3": 4, "larg": 4, "18181993e": 4, "51711241e": 4, "98726850e": 4, "89012910e": 4, "07662463e": 4, "04999629e": 4, "05695117e": 4, "43496705e": 4, "68629493": 4, "09569364": 4, "53236952": 4, "20267754": 4, "6051785": 4, "30719053": 4, "61788852": 4, "50146913": 4, "73507278": 4, "1688434": 4, "5539995": 4, "20376628": 4, "30902248": 4, "62794433": 4, "43131725": 4, "optim": 4, "103": 4, "minim": 4, "fact": 4, "regular": 4, "out": 4, "even": 4, "hyperparamet": 4, "still": 4, "what": [4, 6], "2nd": 4, "section": [4, 6], "realiz": 4, "canon": 4, "give": 4, "parsimoni": 4, "emploi": 4, "quit": 4, "shrinkag": 4, "glmnet": 4, "reach": 4, "comparison": 4, "sake": 4, "occur": 4, "inde": 4, "5th": 4, "been": [4, 6], "oppos": 4, "smallest": 4, "magnitud": 4, "ultim": 4, "spars": 4, "best": [4, 6], "worst": 4, "motiv": [4, 6], "relax": 4, "confid": 4, "interv": 4, "paramet": 4, "approach": 4, "normal": 4, "i": [4, 6], "1000": 4, "bootparam": 4, "bootstrap_model": 4, "orig_param": 4, "param": 4, "sampl": 4, "bootdf": 4, "sb": 4, "var": 4, "bottom": 4, "len": 4, "axvlin": 4, "percentil": 4, "orang": 4, "97": 4, "green": 4, "red": 4, "histplot": 4, "str": 4, "confidence_interval_hist": 4, "bonferroni": 4, "correct": 4, "simultan": 4, "hypothesi": [4, 6], "inspect": 4, "issoutheasty": 4, "reject": 4, "null": 4, "actual": [4, 6], "upon": 4, "quantil": 4, "doesn": [4, 6], "doe": 4, "cannot": 4, "sai": 4, "same": [4, 6], "These": 4, "cours": [4, 6], "conting": 4, "10000": 4, "replic": 4, "orig_params_model": 4, "287": 4, "203": 4, "15e": 4, "218": 4, "13935": 4, "788e": 4, "3040": 4, "793e": 4, "122": 4, "3032": 4, "484": 4, "234": 4, "5638": 4, "121": 4, "672": 4, "327": 4, "800": 4, "4931": 4, "050": 4, "922": 4, "396": 4, "591": 4, "6651": 4, "016": 4, "485": 4, "674": 4, "657": 4, "2811": 4, "535": 4, "011": 4, "064": 4, "498": 4, "5704": 4, "212": 4, "929": 4, "5630": 4, "253": 4, "224": 4, "486": 4, "579": 4, "514": 4, "948": 4, "109": 4, "52e": 4, "112": 4, "341": 4, "my": 4, "came": 4, "research": [4, 6], "question": [4, 6], "everi": 4, "increas": 4, "approxim": 4, "563": 4, "ci": 4, "2000": 4, "9467": 4, "3419": 4, "6497": 4, "642": 4, "6664": 4, "06139": 4, "6253": 4, "00614": 4, "1627": 4, "unemploi": 4, "0119": 4, "1144": 4, "find": [4, 6], "limit": 4, "2016": 4, "lung": 4, "excess": 4, "collinear": 4, "aspect": 4, "caus": 4, "predictor": 4, "few": [4, 6], "action": 4, "turn": 4, "introduct": 5, "purpos": [5, 6], "259": 6, "spring": 6, "wednesdai": 6, "00pm": 6, "pt": 6, "prof": 6, "p\u00e9rez": 6, "gsi": 6, "sapienza": 6, "depart": 6, "uc": 6, "berkelei": 6, "assign": 6, "worth": 6, "free": 6, "form": 6, "you": 6, "onlin": 6, "ask": 6, "share": 6, "manner": 6, "ve": 6, "dure": 6, "choos": 6, "judgment": 6, "dozen": 6, "megabyt": 6, "someth": 6, "gigabyt": 6, "big": 6, "put": 6, "isn": 6, "local": 6, "remot": 6, "cach": 6, "adequ": 6, "execut": 6, "don": 6, "implic": 6, "so": 6, "long": 6, "term": 6, "Will": 6, "store": 6, "zenodo": 6, "amen": 6, "standalon": 6, "write": 6, "proper": 6, "those": 6, "docstr": 6, "input": 6, "shown": 6, "pure": 6, "itself": 6, "choic": 6, "cleanest": 6, "fluid": 6, "workflow": 6, "script": 6, "sure": 6, "must": 6, "properli": 6, "feel": 6, "dictat": 6, "break": 6, "down": 6, "mani": 6, "reason": 6, "There": 6, "hard": 6, "fast": 6, "rule": 6, "how": 6, "paragraph": 6, "scientif": 6, "readabl": 6, "length": 6, "etc": 6, "criteria": 6, "decis": 6, "essai": 6, "stephen": 6, "wolfram": 6, "creator": 6, "mathematica": 6, "inspir": 6, "thought": 6, "comput": 6, "intermedi": 6, "recomput": 6, "scratch": 6, "mind": 6, "save": 6, "reus": 6, "report": 6, "disk": 6, "them": 6, "look": 6, "back": 6, "instruct": 6, "refresh": 6, "referenc": 6, "simpl": 6, "control": 6, "acquisit": 6, "measur": 6, "fall": 6, "broad": 6, "purview": 6, "exploratori": 6, "justif": 6, "acquir": 6, "expect": 6, "lot": 6, "deal": 6, "brief": 6, "member": 6, "did": 6, "stori": 6, "sentenc": 6, "person": 6, "suffic": 6, "agre": 6, "languag": 6, "journal": 6, "principl": 6, "reserv": 6, "right": 6, "anyon": 6, "effort": 6, "environ": 6, "previou": 6, "homework": 6, "necessari": 6, "virtual": 6, "updat": 6, "env": 6, "forget": 6, "seed": 6, "anyth": 6, "stochast": 6, "compon": 6, "collabor": 6, "commit": 6, "messag": 6, "branch": 6, "short": 6, "self": 6, "relev": 6, "instal": 6, "autom": 6, "A": 6, "user": 6, "explicitli": 6, "strongli": 6, "victoria": 6, "stodden": 6, "innov": 6, "she": 6, "media": 6, "maxim": 6, "reshar": 6, "credit": 6, "guarante": 6, "gitignor": 6, "git": 6, "prevent": 6, "automat": 6, "inclus": 6, "unwant": 6, "avoid": 6, "noisi": 6, "output": 6, "thing": 6, "know": 6, "won": 6, "evalu": 6, "whole": 6, "element": 6, "central": 6, "take": 6, "semest": 6, "hw07": 6}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"data": [0, 1, 2, 4, 6], "prepar": 0, "clean": 0, "explor": 0, "visual": [1, 2], "1": [1, 4], "anomali": 1, "heatmap": 1, "2": [1, 4], "understand": 1, "racial": 1, "effect": 1, "mortal": 1, "introduct": 2, "purpos": 2, "Of": 2, "analysi": [2, 6], "regress": [2, 4], "conclus": [2, 4], "author": 2, "contribut": 2, "cancer": 3, "ol": 3, "challeng": 3, "project": [3, 6], "group": 3, "10": 3, "daniel": 3, "killeen": 3, "didi": 3, "duan": 3, "noah": 3, "tran": 3, "brandon": 3, "rodriguez": 3, "jiayi": 3, "qiu": 3, "python": 4, "step": 4, "preprocess": 4, "featur": 4, "select": 4, "us": 4, "lasso": 4, "3": 4, "statist": 4, "infer": 4, "nonparametr": 4, "bootstrap": 4, "4": 4, "model": 4, "final": 6, "origin": 6, "deliver": 6, "function": 6, "structur": 6, "your": 6, "code": 6, "test": 6, "notebook": 6, "support": 6, "main": 6, "narr": 6, "reproduc": 6, "good": 6, "repositori": 6, "practic": 6, "grade": 6}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})