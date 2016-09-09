class AddTreeIdToWordLists < ActiveRecord::Migration[5.0]
  def change
    add_column :word_lists, :tree_id, :integer, null: false, index: true
  end
end
