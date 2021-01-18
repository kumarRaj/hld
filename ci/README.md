# Continuous Integration

### Why should we do Continuous Integration? 

- Multiple people - code synchronization.
- Making sure that the code does not break existing things.
- Sooner the code gets merged into the main branch, faster I can work on something else.
- Automated tests - early feedback.
- Reduce integration problems.
- Available artifact at anytime.

Solution A:

- CI system 
- Create an artifact 
- Collect changes of all branches which have the Complete marker 
- Run tests on them 
- Push it to artifactory 

Problems:

If we combine all branches how do we know which branch broke the build
Overtime your ci pipeline becomes slow
  - Large number of tests
  - Flaky tests
  - Number of steps that the CI has todo exceeds the infrastructure
  - Wasteful execution even due to failures of the CI
  - Incorrect triggers 



## Continuos Integration

- Save time required to test and merge your code
- Find issues early 

### CI for Timeline

- Raise a pull request
- Monitor for pull requests on a repository at some time intervals
- Merge a PR into a temporary brach from main
- Run tests in https://github.com/SunandanBose/Timeline/tree/main/backend/timeline/src/test/java/com/project/timeline folder
- Run this test - https://github.com/SunandanBose/Timeline/blob/main/frontend/timeline-ui/src/App.test.js
- Store results of test
- If pass then merge PR with main and delete temporary
- If fail then trigger notification to owner

### System

- PR Monitor

- Build Check - Run tests and make a artefact

- Merge System


### Gradle
- gradle build - make a artefact
- gradle test - tests run
