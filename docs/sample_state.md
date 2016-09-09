```json
{
  current_user: {
    id: 1,
    username: "Noam"
  },
  trees: {
    1: {
      id: 2,
      name: 'German',
    },
    2: {
      id: 4,
      name: 'Italian'
    }
  },
  nodes: {
    1: {
      id: 6,
      treeId: 2
      completed: false,
      unlocked: true
      words: [
        {
          nodeId: 6,
          word: 'ein',
          translation: ['one', 'a', 'an'],
          answeredCorrectly; false
        },
        {
          nodeId: 6,
          word: 'ich',
          translation: ['I'],
          answeredCorrectly: true
        },
        etc. (15 total word object in array)
      ]
    },
    2: etc. (20 nodes in object)
  },
  forms: {
    signUp: {
      errors: ['password too short']
    },
    signIn: {
      errors: []
    }
  }
}
```
