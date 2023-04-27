testpropo = read.csv('cancer_reg.csv')
testpropo <- testpropo %>% mutate(Target_div_Income = TARGET_deathRate/medIncome)
testpropo1 = cbind(testpropo, str_match(testpropo$Geography,"(.+), (.+)")[ ,-1])
colnames(testpropo1)[37] ="State"
colnames(testpropo1)[36] = "County"
testpropo1[167,36] <- "Dona Ana County"
testpropo1[821,36] <- "La Salle Parish"
codes <- rep(NULL, length(testpropo1$County))

for (i in 1:length(testpropo1$avgAnnCount)){
 codes[i] = fips(state = testpropo1$State[i], county = testpropo1$County[i])
}

testpropo2 = cbind(testpropo1, fips = codes)
testpropo3 <- testpropo2 %>% mutate(Target_div_LogIncome = TARGET_deathRate/log(medIncome))
testpropolog = cbind(testpropo3, fips = codes)
graphdatalog = data.frame(fips = testpropolog$fips, values = testpropo3$Target_div_LogIncome)
newbieLOG <- graphdata %>% mutate(anomalies = ifelse(abs(scale(values)) > 1, values, 0))
newbieLOG <- newbieLOG[,c(1,3)]

cat(newbieLOG)