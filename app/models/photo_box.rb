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
end
