class AddUserIdToNodes < ActiveRecord::Migration[5.0]
  def change
    add_column :nodes, :user_id, :integer, null: false
  end
end
