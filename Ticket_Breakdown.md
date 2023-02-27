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

1. Save custom id field on agent's profile

### Context

We need to add the ability for facilities to save their own custom ids for each Agent they work with. 

### Acceptance Criteria

1. Given that I'm a facility manager \\ 
When I'm visiting an agent profile that we've staffed \\ 
Then I see an input below their name with a label 'Custom ID'
1. Given that I'm a facility manager
When I input a custom ID on an agent profile and click save
Then that custom ID is saved on the database 
1. Given that I'm a facility manager
When I input a custom ID on an agent profile and click save
Then that custom ID is saved on the database 

### Implementation details

1. The ID must have a 255 character limit for storage optimization


### Estimation  


2. Adapt getShiftsByFacility to return agent's custom id in the metadata
3. Adapt generateReport to export 
