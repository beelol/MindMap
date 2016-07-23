# == Schema Information
#
# Table name: photo_boxes
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :string
#  photo_url   :string           not null
#  ord         :integer          not null
#  author_id   :integer          not null
#  board_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PhotoBox < ActiveRecord::Base
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :board,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: :Board
end
