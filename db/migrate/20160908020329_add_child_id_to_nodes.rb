class AddChildIdToNodes < ActiveRecord::Migration[5.0]
  def change
    add_column :nodes, :child_id, :integer, index: true
  end
end
