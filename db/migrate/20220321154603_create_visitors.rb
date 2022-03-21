class CreateVisitors < ActiveRecord::Migration[6.1]
  def change
    create_table :visitors do |t|
      t.belongs_to :villager, null: false, foreign_key: true
      t.belongs_to :island, null: false, foreign_key: true

      t.timestamps
    end
  end
end
