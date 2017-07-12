class CreateWaypoints < ActiveRecord::Migration[5.0]
  def change
    create_table :waypoints do |t|
      t.float :lat
      t.float :long
      t.integer :hike_id

      t.timestamps
    end
  end
end
