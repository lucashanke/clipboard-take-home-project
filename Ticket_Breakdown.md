# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### 1.Save custom id field on agent's profile

#### Context

We need to add the ability for facilities to save their own custom ids for each Agent they work with. 

#### Acceptance Criteria

1. Given that I'm a facility manager 
When I visit an agent profile that we've staffed  
Then I see a button below their name with the label 'Change ID'

1. Given that I'm a facility manager visiting an agent profile that we've staffed  
When I click on 'Change ID' button
Then I see a popup with a text input and a confirmation button

1. Given that I'm a facility manager visiting an agent profile that we've staffed  
When I input a custom ID and click save
Then that custom ID is saved on the database

1. Given that I'm a facility manager visiting an agent profile that we've staffed  
When I input a custom ID with more than 255 characters and click save
Then that custom ID is saved on the database

#### Implementation details

1. The ID must have a 255 character limit for storage optimization
1. We should create a new table to store the relationship between Agent and Facility with the custom ID

#### Estimation  

3 (using Fibonacci and when comparing to the other tickets), since we need to create a new table on our database and work on both the backend and frontend.

### 2.Show custom id on agent's profile if one is provided

#### Context

We need to show facilities their own custom ids for each Agent they work with. 

#### Acceptance Criteria

1. Given that I'm a facility manager visiting an agent profile that we've staffed
When they have a custom ID 
Then I see a text below their name showing the custom ID

1. Given that I'm a facility manager visiting an agent profile that we've staffed
When they don't have a custom ID 
Then I only see the 'Change ID'

#### Implementation details

1. We should retrieve the id from the table created on ticket #1

#### Estimation  

2 (using Fibonacci and when comparing to the other tickets), since we the ID would already be stored. Plus, the implementation on the frontend is smaller comparing to ticket #1


### 3. Add custom ID to reports

#### Context

We need to show facilities their own custom ids when generating reports with shifts and agents information.

#### Acceptance Criteria

1. Given that I'm a facility manager
When I generate a report
Then for each staffed agent, I see their custom ID next to their name if they have one

1. Given that I'm a facility manager
When I generate a report
Then for each staffed agent, I see only their name if they dont have a custom id

#### Implementation details

1. We should change the method `getShiftsByFacility` to add the agent's custom id when returning a shifts metadata
1. Then, we can change the `generateReport` so it used the custom ID when generating a report 

#### Estimation  

1 (using Fibonacci and when comparing to the other tickets), since we the ID would already be stored and the implementation is backend only.
