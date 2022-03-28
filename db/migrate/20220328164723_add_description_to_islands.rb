class AddDescriptionToIslands < ActiveRecord::Migration[6.1]
  def change
    add_column :islands, :description, :string
  end
end

