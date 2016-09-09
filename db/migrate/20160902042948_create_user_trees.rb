class CreateUserTrees < ActiveRecord::Migration[5.0]
  def change
    create_table :trees_users, id: false do |t|
      t.belongs_to :user, index: true
      t.belongs_to :tree, index: true
      t.timestamps
    end
  end
end
