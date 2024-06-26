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
