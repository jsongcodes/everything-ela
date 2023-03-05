class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :image
      t.string :body
      t.integer :student_id

      t.timestamps
    end
  end
end
