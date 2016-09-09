class ChangeTables < ActiveRecord::Migration[5.0]
  def change
    remove_column :words, :node_id
    add_column :words, :node_id, :integer, null: false
    change_column :users, :username, :string, unique: true
  end
end
