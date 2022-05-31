$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/search.feature");
formatter.feature({
  "line": 1,
  "name": "Search for a cause \"12\"",
  "description": "As user want to click on easyfundraising website",
  "id": "search-for-a-cause-\"12\"",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6281927500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be confirm the selected cause with a message",
  "description": "",
  "id": "search-for-a-cause-\"12\";user-should-be-confirm-the-selected-cause-with-a-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User should on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on search",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter cause number",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should click on search link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should see the message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userShouldOnHomePage()"
});
formatter.result({
  "duration": 118941300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnSearch()"
});
formatter.result({
  "duration": 131780100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEnterCauseNumber()"
});
formatter.result({
  "duration": 46879900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldClickOnSearchLink()"
});
formatter.result({
  "duration": 921032700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmessage\u003e",
      "offset": 29
    }
  ],
  "location": "MyStepdefs.userShouldSeeTheMessage()"
});
formatter.result({
  "duration": 517300,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027uk.org.easyfundraising.cucumber.steps.MyStepdefs.userShouldSeeTheMessage() in file:/C:/Users/Kajal%20Usadadiya/HomeWork/Easyfundraising-cucumber/target/test-classes/\u0027 with pattern [^User should see the message \"([^\"]*)\"$] is declared with 0 parameters. However, the gherkin step has 1 arguments [\u003cmessage\u003e]. \nStep: Then User should see the message \"\u003cmessage\u003e\"\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 353801000,
  "status": "passed"
});
});