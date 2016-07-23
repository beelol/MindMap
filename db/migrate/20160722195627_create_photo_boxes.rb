class CreatePhotoBoxes < ActiveRecord::Migration
  def change
    create_table :photo_boxes do |t|
      t.string :name, null: false
      t.string :description
      t.string :photo_url, null: false
      t.integer :ord, null: false
      t.integer :author_id, null: false
      t.integer :board_id, null: false

      t.timestamps null: false
    end
  end
end
