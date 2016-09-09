# WordMine

## Minimum Viable Product
  WordMine is a web application inspired by Duolingo. Users can choose languages to learn and learn the most common words in those languages.

  * Hosting on Heroku
  * User Profiles
  * Trees
  * Nodes
  * New account creation, user/guest login
  * Production README

## Design Docs
  * [Api Endpoints](api_endpoints.md)
  * [React Components](component_hierarchy.md)
  * [Redux Structure](redux_structure.md)
  * [Sample State](sample_state.md)
  * [Schema](schema.md)
  * [Wireframes](wireframes/)

## Implementation Timeframe
### Phase 1: Setup (1 day)
  **Objective**: Have a functioning app with a styled splash page
  * Rails New (postgresql)
  * add gems (better_errors, binding_of_caller, annotate, table_print, pry-rails, byebug)
  * webpack.config.js
  * install react, redux, etc. in package.js
  * create api/StaticPagesController
  * configure server routes
  * set up frontend folder
  * seed database with at least one language, two nodes, and 15 words in each node for testing
  * style splash page
  * push to Heroku
  * review phase 1

### Phase 2: Frontend Authentication (1 day)
  **Objective**: Have a functioning sign-in/sign-up structure
  * create User model and api/UsersController
  * create Sessions controller
  * password protection
  * session
    * SessionMiddleware
    * SessionReducer
  * edit application layout for user persistence
  * review phase 2

### Phase 3: Words and Nodes (1 day)
  **Objective**: Have a styled node page
  * create Word model
  * seed database with words
  * create Node model and api/NodesController
  * set up associations between words and nodes
  * do JBuilder for Nodes index
  * NodeContainer
    * ProgressBarContainer
      * ProgressPiece component
    * ForeignWord component
    * GuessField component
  * style node page
  * review phase 3
  * revisit previous phases and clean up

### Phase 4: Tree page and nav bar (2 days)
  **Objective**: Get tree page to display, be able to click on nodes and go to node page, and have nav bar
  * create Tree model and api/TreesController
  * Tree component
    * triggers fetchNodes request in componentWillMount
  * LanguageHeader subcomponent
  * Node subcomponents
  * set onClick on all nodes to send user to proper page (regardless of unlocked status for now)
    * dispatches fetchNode request
    * put basic placeholder content for node page
  * NodeMiddleware
    * catches requestNode and requestNodes dispatches
  * NodeReducer
    * catches receiveNode and receiveNodes dispatches
  * style tree page
  * create and style nav bar
    * Profile onClick sends user to profile page
    * LogOut onClick logs out user, renders splash page
  * review phase 4

### Phase 5: Selecting languages (1 day)
  **Objective**: Allow users to check boxes indicating which languages they want to learn and have the state update accordingly
  * create Tree model and api/TreeController
  * ChooseLanguage component
    * LanguageChoice components
      * store choices in their own states
  * selector to get list of language names
  * TreeMiddleware
    * intercepts dispatch to requestAllTrees and sends back a list of the language names
  * TreeReducer
    * takes a receiveTrees dispatch and updates the state accordingly
  * create actions for requesting and receiving trees
  * NextButton sends user to profile page
  * style choose language page
  * review phase 5

### Phase 6: Profile (1 day)
  **Objective**: Display languages that the user is learning and have a button next to each one that sends the user to the corresponding language tree
  * ProfileContainer
    * LanguageIndex component
      * triggers fetchUserTrees in componentWillMount
      * onClick of items dispatches fetchLanguage request
  * style profile page
  * review phase 6

### Phase 7: Finishing touches (3 days)
  **Objective**: Have a bug-free, visually pleasing web application!
  * Fix any remaining bugs
  * Touch up styling
  * Add bonus features if time
    * Be able to progress through questions in nodes
    * Be able to create custom nodes
    * Use Google API to translate custom content
