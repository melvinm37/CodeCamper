﻿define('model.mapper',
['model'],
    function (model) {
        var
            attendance = {
                getDtoId: function(dto) {
                    return model.Attendance.makeId(dto.PersonId, dto.SessionId);
                },
                fromDto: function(dto, item) {
                    item = item || new model.Attendance();
                    item.personId(dto.PersonId)
                        .sessionId(dto.SessionId);
                    item.rating(dto.Rating).text(dto.Text);
                    item.dirtyFlag().reset();
                    return item;
                }
            },
        
            room = {
                getDtoId: function(dto) { return dto.Id; },
                fromDto: function(dto, item) {
                    item = item || new model.Room().id(dto.Id);
                    return item.name(dto.Name);
                }
            },
        
            session = {
                getDtoId: function(dto) { return dto.Id; },
                fromDto: function(dto, item) {
                    item = item || new model.Session().id(dto.Id);
                    item.title(dto.Title)
                        .code(dto.Code)
                        .description(dto.Description)
                        .speakerId(dto.SpeakerId)
                        .trackId(dto.TrackId)
                        .timeslotId(dto.TimeSlotId)
                        .roomId(dto.RoomId)
                        .level(dto.Level)
                        .tags(dto.Tags);
                    item.dirtyFlag().reset();
                    item.isBrief(dto.Description === undefined); // detect if brief or full session
                    return item;
                }
            },
        
            person = {
                getDtoId: function(dto) { return dto.Id; },
                fromDto: function(dto, item) {
                    item = item || new model.Person().id(dto.Id);
                    item.firstName(dto.FirstName)
                        .lastName(dto.LastName)
                        .email(dto.Email)
                        .blog(dto.Blog)
                        .twitter(dto.Twitter)
                        .gender(dto.Gender)
                        .imageSource(dto.ImageSource)
                        .bio(dto.Bio);
                    item.dirtyFlag().reset();
                    item.isBrief(dto.Bio === undefined); // detect if brief or full person
                    return item;
                }
            },
        
            timeSlot = {
                getDtoId: function(dto) { return dto.Id; },
                fromDto: function(dto, item) {
                    item = item || new model.TimeSlot().id(dto.Id);
                    return item
                        .start(moment(dto.Start).toDate())
                        .duration(dto.Duration);
                }
            },
        
            track = {
                getDtoId: function (dto) { return dto.Id; },
                fromDto: function (dto, item) {
                    item = item || new model.Track().id(dto.Id);
                    return item.name(dto.Name);
                }
            };

        return {
            attendance: attendance,
            room: room,
            session: session,
            person: person,
            timeSlot: timeSlot,
            track: track
        };
    });