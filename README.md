# Instructions for verifying these tests
The following are instructions for downloading and running the Cypress tests associated with this repo.

## Initial setup
* Create an empty folder on your desktop
* Within that folder create another empty folder called <code>tempProject</code>

## Download repo
* Navigate to https://github.com/tminer75/tminer_automation_cypress_zillow_test
* Select the green "<>Code" button
* Select "Download Zip"
* Select the desktop folder you created in the _**Initial setup**_ steps
* Extract that zip into the same folder

## Download Cypress
* Navigate to [cypress.io](https://www.cypress.io/)
* Click the green "Install" button in the upper right
* Click "Download Cypress.zip"
* Download the zip into the desktop folder you created in the _**Initial setup**_ steps
* Extract that zip into the same folder

## Opening and running tests in Cypress
* Within the newly extracted Cypress folder navigate to the "Cypress.exe" and double-click it
  * Should be located within <code>\cypress\Cypress</code>
  * This will launch the Cypress Launchpad
* Select "+ Add project"
* Click "browse manually"
* Select the empty folder created during the _**Initial setup**_ step
  * Should be called <code>tempProject</code> per the instructions
* Select "E2E" Testing
* Click "Continue" on the Configuration files screen
  ### Before you click "Start E2E testing" do the following:
  * In a new Explorer/Finder window navigate to [desktopFolder]\tempProject\cypress
  * In another Explorer/Finder window navigate to [desktopFolder]\tminer_automation_cypress_zillow_test-master\tminer_automation_cypress_zillow_test-master\cypress
  * Copy the <code>e2e, fixtures, and support</code> files from the <code>tminer_automation_cypress_zillow_test-master</code> folder
  * Paste these files into the <code>tempProject</code> folder (within that cypress folder)
    * Confirm that you want to replace all files
* Navigate back to the Cypress Launchpad
* Select Chrome and click "Start E2E Testing in Chrome"
* Click "interest-rate.cy.js" in the Specs panel
* Observe the tests running


# Automation Notes, Thoughts, and Considerations
* After writing the automation I would consider breaking down some of the test into smaller chunks. A part of me is paranoid that this will increase test run times, but it would further isolate tests reducing cascading faliures (an example is the interest rate error tests).
* With this project I put all of the selector information into a page object json. This allowed me to quickly make updates to this file instead of refactoring my code. In the future I would like to move away from json page object files and move towards a normal page object structure within fixtures.
* Some of the selectors in these test feel very brittle (the interest rate helper tooltip for example). Ideally there would be collaboration with a dev in which unique ids or data- tags are added for less flakey tests.
* While writing the code I was trying to think of ways to better link/point the tests at the tesptlan for quicker back and forth referencing. I would love to have a discussion with a dev on whether this is a thing that can be achieved.
* Though it was beyond the scope of this test it would be interesting to include some type of component verification tests. This could possible cover the "this looks correct" examples in the testplan. Would need to have conversations with devs on if this is feasible, and if so how best to tackle this.
* I excluded a .yaml CI/CD file in this project. That would be a top priority I would like to integrate, in collaboration with DevOps, in the future so that tests can be run automatically.
