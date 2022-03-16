class AddUsernameToVillagers < ActiveRecord::Migration[6.1]
  def change
    add_column :villagers, :owner, :string
  end
end
