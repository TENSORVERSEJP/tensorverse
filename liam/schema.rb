ActiveRecord::Schema.define(version: 20250408000000) do

    create_table "Python", force: :cascade do |t|
      t.string   "Variable",
      t.string   "Function"
      t.string   "Class",
      t.string   "Main Guard"
      t.string   "開発言語"
    end
  
    create_table "AI", force: :cascade do |t|
      t.string   "Neural Network",
      t.string   "Deep Learning",
      t.string   "機械学習フレームワーク"
    end
  
  end
  