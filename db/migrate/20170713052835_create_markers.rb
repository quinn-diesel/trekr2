class CreateMarkers < ActiveRecord::Migration[5.0]
  def change
    create_table :markers do |t|
      t.float :lat
      t.float :long
      t.integer :hike_id

      t.timestamps
    end
  end
end
