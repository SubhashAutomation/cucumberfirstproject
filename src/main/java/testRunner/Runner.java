package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "C:\\Users\\PURSUITUSER\\eclipse-workspace\\cucumberfirstproject\\src\\main\\java\\featureFiles\\SFDClogin.feature"
,glue= {"stepDefinitions"}
,monochrome= true
,plugin = {"pretty", "html:html_report"}
,strict = false
)

public class Runner {

}
