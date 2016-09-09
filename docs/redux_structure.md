<h2> Auth Cycles </h2>
<h4> Session API requests </h4>
  * sign in
    * invoked from AuthForm onSubmit of SignInButton
    * sends a post request to api/sessions
    * callback set as receiveCurrentUser
  * sign out
    * invoked from SignOutButton on nav bar
    * sends a delete request to api/sessions
    * callback set as removeCurrentUser
  * sign up
    * invoked from AuthForm onSubmit of SignUpButton
    * sends a post request to api/users
    * callback set as receiveCurrentUser
  * fetchCurrentUser
    * invoked from AuthForm on componentDidMount
    * sends a post request to api/sessions
    * callback set as receiveCurrentUser

<h4> Session API responses </h4>
  * receiveCurrentUser
    * invoked as callback from request
    * the SessionReducer puts the current_user in the state
  * removeCurrentUser
    * invoked as callback from request
    * the SessionReducer removes the current_user from the state

<h2> Tree Cycles </h2>
<h4> Tree API requests </h4>
  * fetchAllTrees
    * invoked from ChooseTree onSubmit
    * GET /api/trees is called
    * callback set as receiveAllTrees
  * fetchUserTrees
    * invoked from profile's TreeIndex on componentWillMount
    * GET /api/users/:userId/trees is called
    * callback set as receiveUserTrees
  * fetchTrees
    * invoked from StudyButton in profile
    * GET /api/users/:userId/trees/:treeId is called
    * callback set as receiveTree

<h4> Tree API responses </h4>
  * receiveAllTrees
    * invoked as callback from request
    * the TreeReducer puts selected trees in the state
  * receiveUserTrees
    * invoked as callback from request
    * the TreeReducer puts selected trees in the state
  * receiveTree
    * invoked as callback from request
    * TreeReducer puts selected tree in the state

<h2> Node Cycles </h2>
<h4> Node API requests </h4>
  * fetchNodes
    * invoked from Nodes in componentDidMount
    * GET /api/tree/:treeId/nodes is called
    * callback set as receiveNodes
  * fetchNode
    * invoked from Node in onClick
    * GET /api/tree/:treeId/node/:nodeId is called
    * callback set as receiveNode

<h4> NodeAPI responses </h4>
  * receiveNodes
    * invoked as callback from request
    * the NodeReducer sets the tree.nodes portion of the tree
  * receiveNode
    * invoked as callback from request
    * the NodeReducer puts the selected node in the tree.nodes portion of the tree
