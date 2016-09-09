class CreateWords < ActiveRecord::Migration[5.0]
  def change
    create_table :words do |t|
      t.string :word, null: false
      t.string :node_id, null: false, index: true
      t.string :translation, null: false
      t.timestamps
    end
  end
end
