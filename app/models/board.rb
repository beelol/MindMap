# == Schema Information
#
# Table name: boards
#
#  id              :integer          not null, primary key
#  name            :string           not null
#  description     :string
#  listing_id      :integer          not null
#  author_id       :integer          not null
#  master_board_id :integer
#  ord             :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Board < ActiveRecord::Base
  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Listing

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :master_board,
    primary_key: :id,
    foreign_key: :master_board_id,
    class_name: :Board

  has_many :sub_boards,
    primary_key: :id,
    foreign_key: :master_board_id,
    class_name: :Board
end
