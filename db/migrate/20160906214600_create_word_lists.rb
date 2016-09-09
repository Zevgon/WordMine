class CreateWordLists < ActiveRecord::Migration[5.0]
  def change
    create_table :word_lists do |t|
      t.string :title, null: false
      t.timestamps
    end
    remove_column :words, :node_id
    add_column :words, :word_list_id, :integer
    add_column :nodes, :word_list_id, :integer
  end
end
