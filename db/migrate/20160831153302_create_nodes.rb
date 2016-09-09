class CreateNodes < ActiveRecord::Migration[5.0]
  def change
    create_table :nodes do |t|
      t.string :title, null: false
      t.integer :tree_id, null: false
      t.boolean :completed, null: false, default: false
      t.boolean :unlocked, null: false, default: false
      t.timestamps
    end
  end
end
