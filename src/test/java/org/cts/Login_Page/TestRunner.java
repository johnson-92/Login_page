package org.cts.Login_Page;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\PRATHEEP A\\eclipse-workspace\\Login_Page\\features\\Login.feature",glue="org.cts.Login_Page",monochrome=true,dryRun=false,strict=false,plugin={"pretty","html:target","json:target/cucumberreport.json","rerun:src/test/resources/failed.txt"})
public class TestRunner {

}
