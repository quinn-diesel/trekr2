class CreateCompletions < ActiveRecord::Migration[5.0]
  def change
    create_table :completions do |t|
      t.datetime :date
      t.integer :user_id
      t.integer :hike_id

      t.timestamps
    end
  end
end
