class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :name
      t.string :description
      t.integer :author_id, null: false
      t.integer :ord

      t.timestamps null: false
    end
  end
end
