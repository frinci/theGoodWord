class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :author
      t.string :author_title
      t.string :description
      t.string :main_quote
      t.string :category
      t.string :content

      t.timestamps
    end
  end
end
