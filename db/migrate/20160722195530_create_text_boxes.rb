class CreateTextBoxes < ActiveRecord::Migration
  def change
    create_table :text_boxes do |t|
      t.string :name, null: false
      t.string :text, null: false
      t.integer :ord, null: false
      t.integer :author_id, null: false
      t.integer :board_id, null: false

      t.timestamps null: false
    end
  end
end
