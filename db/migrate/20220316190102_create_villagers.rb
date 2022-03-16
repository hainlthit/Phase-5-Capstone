class CreateVillagers < ActiveRecord::Migration[6.1]
  def change
    create_table :villagers do |t|
      t.string :name
      t.string :species
      t.string :birthday
      t.string :personality
      t.string :image
      t.integer :likes

      t.timestamps
    end
  end
end
