class EditUserInfo < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :location, :string
    add_column :users, :photo, :text

  end
end
