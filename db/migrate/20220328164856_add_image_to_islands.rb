class AddImageToIslands < ActiveRecord::Migration[6.1]
  def change
    add_column :islands, :image, :string
  end
end
