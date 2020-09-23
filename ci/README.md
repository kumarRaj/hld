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
