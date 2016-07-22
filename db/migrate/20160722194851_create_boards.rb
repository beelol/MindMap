class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.string :description
      t.integer :listing_id, null: false
      t.integer :author_id, null: false
      t.integer :master_board_id
      t.integer :ord, null: false

      t.timestamps null: false
    end
  end
end
