package Login9gag.Runner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
	features = {"src/test/java/Login9gag/FeatureFiles/"},
	glue = {"Login9gag.StepsFiles"},
	plugin = {"pretty", "html:report/cucumber", 
			"json:report/cucumber.json", 
			"com.cucumber.listener.ExtentCucumberFormatter:report/report.html"}
)

public class MainRunner {

}
