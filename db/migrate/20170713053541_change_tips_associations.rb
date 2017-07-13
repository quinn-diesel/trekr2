class ChangeTipsAssociations < ActiveRecord::Migration[5.0]
  def change
      remove_column :tips, :waypoint_id, :integer
      add_column :tips, :marker_id, :integer
  end
end
